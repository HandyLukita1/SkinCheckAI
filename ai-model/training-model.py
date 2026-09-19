import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.models import Model
import os

DATASET_DIR = 'dataset'
IMG_WIDTH, IMG_HEIGHT = 128, 128
BATCH_SIZE = 16
EPOCHS = 5

if not os.path.exists(DATASET_DIR):
    print(f"ERROR: Dir '{DATASET_DIR}' not found!")
    exit()

# count the number of classes on subfolders in the dataset directory
class_folders = [f for f in os.listdir(DATASET_DIR) if os.path.isdir(os.path.join(DATASET_DIR, f))]
NUM_CLASSES = len(class_folders)
print(f"Detected {NUM_CLASSES} classes: {class_folders}")

if NUM_CLASSES < 2:
    print("ERROR: You need at least 2 class subfolders inside your dataset directory!")
    exit()

# data augmentation & split
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    zoom_range=0.2,
    validation_split=0.2
)

train_generator = train_datagen.flow_from_directory(
    DATASET_DIR,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical', 
    subset='training'
)

validation_generator = train_datagen.flow_from_directory(
    DATASET_DIR,
    target_size=(IMG_WIDTH, IMG_HEIGHT),
    batch_size=BATCH_SIZE,
    class_mode='categorical', 
    subset='validation'
)

# build Model via Transfer Learning
base_model = MobileNetV2(input_shape=(IMG_WIDTH, IMG_HEIGHT, 3), include_top=False, weights='imagenet')
base_model.trainable = False

x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(128, activation='relu')(x)
# output layer updated with NUM_CLASSES and activation for multi-class prediction
output = Dense(NUM_CLASSES, activation='softmax')(x)

model = Model(inputs=base_model.input, outputs=output)

# compiled with categorical_crossentropy 
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])

# training
print("Training SkinCheck Model with Abnormal Mole category...")
model.fit(
    train_generator,
    validation_data=validation_generator,
    epochs=EPOCHS
)

model.save('skin_model.h5')
print("Model saved successfully as skin_model.h5!")