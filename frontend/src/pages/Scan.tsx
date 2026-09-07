import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import trashIcon from '../assets/trash-icon.svg';
import './Scan.css'; 

const API_BASE_URL = "http://127.0.0.1:5000";

const MAX_FILE_SIZE_MB = 10;
const COOLDOWN_TIME = 60000;

export default function Scan() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  const [_, setAttempts] = useState(0);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: number;
    if (isRateLimited) {
      timer = setTimeout(() => {
        setIsRateLimited(false);
        setAttempts(0);
      }, COOLDOWN_TIME);
    }
    return () => clearTimeout(timer);
  }, [isRateLimited]);
  
  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileProcess(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileProcess(e.target.files[0]);
    }
  };

  const handleFileProcess = (selectedFile: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(selectedFile.type)) {
      alert("Please upload .png or .jpg file");
      return;
    }

    const fileSizeMB = selectedFile.size / 1024 / 1024;
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      alert(`File is too big, max ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }
    
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
    setResult(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setAttempts(prev => prev + 1);
    setLoading(true);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${API_BASE_URL}/predict`, formData);
      setResult(response.data);
    } catch (error: any) {
      console.error(error);
      const msg = error.response?.data?.error || "Failed to connect to server.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  const resetScan = () => {
    setFile(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div className="w-full flex-grow bg-gradient-to-r from-[#58C8FF] to-[#27FE89] px-6 py-10 md:px-12 md:py-16 xl:px-28 xl:py-20 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg md:max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-10">        
        
        <div className="flex flex-col justify-center items-center text-white gap-1 mb-6">
            <h2 className="font-bold text-center text-2xl md:text-3xl xl:text-4xl">
              Scan Your Skin
            </h2>
            <p className="text-xs md:text-base text-white/90">
              Upload your skin condition sample image
            </p>
        </div>
        
        {!preview ? (
          <form 
            className="relative"
            onDragEnter={handleDrag} 
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              ref={inputRef}
              type="file" 
              className="hidden" 
              accept="image/*"
              onChange={handleChange}
            />

            <div 
              onClick={() => !isRateLimited && inputRef.current?.click()}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`
                flex flex-col items-center justify-center p-8 md:p-12 border-2 border-dashed rounded-2xl transition-all duration-200 
                ${isRateLimited ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                ${dragActive 
                  ? "border-white bg-white/40 scale-[1.02]" 
                  : "border-white/50 bg-white/10 hover:bg-white/20 hover:border-white"} 
              `}
            > 
              <div className="mb-4 text-white pointer-events-none">
                <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
              </div>
              
              <p className="text-sm md:text-base font-semibold text-white mb-1 text-center pointer-events-none">
                {isRateLimited ? "Please wait a moment..." : "Choose a file or drag & drop it here."}
              </p>
              <p className="text-xs md:text-sm text-white/70 text-center pointer-events-none">
                .jpg, .png, or .jpeg formats only. Max {MAX_FILE_SIZE_MB}MB.
              </p>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg border border-white/30 bg-black/20 flex items-center justify-center mb-6">
              <img src={preview} alt="Preview" className="w-full h-full object-contain" />
              
              <button 
                onClick={resetScan}
                className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all shadow-md group"
                title="Delete Image"
              >
                <img 
                  src={trashIcon}
                  alt="Delete"
                  draggable="false" 
                  className="w-5 h-5 object-contain select-none" 
                />
              </button>
            </div>

            <button 
              onClick={handleUpload} 
              disabled={loading || isRateLimited}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-base md:text-lg shadow-lg transition-all 
                ${loading || isRateLimited
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-[#4D93FF] hover:bg-gray-100 active:scale-95'
                }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-[#4D93FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : isRateLimited ? "Limit Reached" : "Start Scanning"}
            </button>
            
            {isRateLimited && (
              <p className="text-red-100 text-xs mt-2 font-medium bg-red-500/20 px-3 py-1 rounded-full">
                Too many attempts. Please wait 1 minute.
              </p>
            )}
          </div>
        )}

        {result && (
          <div className="mt-6 p-5 rounded-2xl border border-white/30 text-center backdrop-blur-sm bg-white/10 text-white">
            <p className="text-xs md:text-sm font-semibold mb-1 uppercase tracking-wider text-white/80">
              Diagnosis Result
            </p>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
              {result.label}
            </h3> 

            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-xs md:text-sm tracking-wide font-medium text-white">
              Confidence: {result.confidence}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}