import { Link } from 'react-router-dom';
import coverImage from '../assets/Cover.jpg';
import asset1 from '../assets/Asset-01.svg';
import asset2 from '../assets/Asset-02.svg';
import asset3 from '../assets/Asset-04.svg';
import asset4 from '../assets/Asset-03.svg';

export default function Home() {
  return (
    <div style={
      { minHeight: '88vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      backgroundColor: '#f8fbff', 
      overflowX: 'hidden' }}>
      
      {/* ---- COVER SECTION --- */}
      <div style={
        { width: '100%', 
          backgroundColor: '#ffffff', 
          padding: '4rem 2rem', 
          borderBottom: '1px solid #e2e8f0' }}>

        <div style={
          { display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem', 
            margin: '0 auto', 
            maxWidth: '1200px', 
            alignItems: 'center' }}>

          <div style={{ textAlign: 'left' }}>

            <div style={
              { display: 'inline-block', 
              backgroundColor: '#e0f2fe', 
              color: '#0284c7', 
              padding: '0.4rem 1rem', 
              borderRadius: '9999px', 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              marginBottom: '1.2rem', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase' }}>
              AI-Powered Dermatology
            </div>
            <h1 style={
              { 
              fontSize: '3rem', 
              fontWeight: 900, 
              color: '#1A3052', 
              marginBottom: '1rem', 
              lineHeight: 1.15 }
              }>
              Detect Skin Conditions <br />
              <span style={
                { background: 'linear-gradient(to right, #38bdf8, #22c55e)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' }
                }>in One Click</span> 
            </h1>

            <p style={
              { fontSize: '1.25rem', 
              color: '#64748b', 
              marginBottom: '2rem', 
              lineHeight: 1.6, 
              maxWidth: '500px' }}>
              Advanced, fast, and secure preliminary skin screening right from your device.
            </p>

            <div style={
              { display: 'flex', 
              gap: '1rem', 
              alignItems: 'center' }}>

              <Link 
                to="/scan"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8 0%, #22c55e 100%)',
                  color: '#ffffff',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  padding: '0.85rem 2.2rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 10px 20px rgba(34, 197, 94, 0.2)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  display: 'inline-block'
                }}
              >
                Start Scanning Now
              </Link>
            </div>
          </div>

          <div style={
            { display: 'flex', 
            justifyContent: 'center' }}>

            <div style={
              { position: 'relative', 
              width: '100%', 
              maxWidth: '480px', 
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
              borderRadius: '2rem', 
              padding: '2rem', 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)' }}>
              <img 
                src={coverImage}
                draggable="false" 
                style={
                  { width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain', 
                    userSelect: 'none', 
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' }} 
                alt="Cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --- MIDDLE SECTION (EARLY DETECTION) --- */}
      <div style={
        { width: '100%', 
        background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)', 
        padding: '6rem 2rem', 
        color: '#ffffff' }}>

        <div style={
          { display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center', 
          maxWidth: '1200px', 
          margin: '0 auto' }}>
          
          <div style={
            { display: 'flex', 
            justifyContent: 'center' }}>

            <img 
              src={asset1}
              draggable="false" 
              style={
                { width: '100%', 
                  maxWidth: '450px', 
                  objectFit: 'contain', 
                  userSelect: 'none', 
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))' }} 

              alt="Early Detection"
            />
          </div>
          
          <div style={{ textAlign: 'left' }}>

            <h2 style={
              { fontSize: '2.75rem', 
              fontWeight: 800, 
              marginBottom: '2rem', 
              lineHeight: 1.2, 
              letterSpacing: '-0.02em' }}>
              Early Skin Detection Matters
            </h2>
            
            <div style={
              { marginBottom: '1.75rem', 
              display: 'flex', 
              flexDirection: 'column',
               gap: '0.3rem' }}>

              <h3 style={
                { fontWeight: 700, 
                fontSize: '1.4rem', 
                margin: 0, 
                color: '#e0f2fe' }}>
                Catch Abnormalities Early
              </h3>

              <p style={
                { fontSize: '1.04rem',
                 margin: 0, 
                 opacity: 0.9, 
                 lineHeight: 1.5, 
                 maxWidth: '500px' }}>
                Identifying skin irregularities early allows for prompt medical evaluation and ultimate peace of mind.
              </p>
            </div>
            
            <div style={
              { marginBottom: '1.75rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.3rem' }}>

              <h3 style={
                { fontWeight: 700, 
                fontSize: '1.4rem', 
                margin: 0, 
                color: '#e0f2fe' }}>
                Prevent Complications
              </h3>

              <p style={
                { fontSize: '1.05rem', 
                margin: 0, 
                opacity: 0.9, 
                lineHeight: 1.5, 
                maxWidth: '500px' }}>
                Timely monitoring prevents minor dermatological concerns from escalating into major issues.
              </p>
            </div>
            
            <div style={
              { display: 'flex', 
              flexDirection: 'column', 
              gap: '0.3rem' }}>

              <h3 style={
                { fontWeight: 700, 
                fontSize: '1.4rem', 
                margin: 0, 
                color: '#e0f2fe' }}>
                Empower Your Health
              </h3>

              <p style={
                { fontSize: '1.05rem', 
                margin: 0, 
                opacity: 0.9, 
                lineHeight: 1.5, 
                maxWidth: '500px' }}>
                Quick screening gives you actionable insights before consulting to a professional specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- BOTTOM SECTION (FEATURES CARDS) --- */}
      <div style={
        { width: '100%', 
        backgroundColor: '#ffffff', 
        padding: '6rem 2rem' }}>

        <div style={
          { textAlign: 'center', 
          marginBottom: '3.5rem' }}>

          <h2 style={
            { fontSize: '2.25rem', 
            fontWeight: 800, 
            color: '#1e293b', 
            marginBottom: '0.75rem' }}>
            Powered by Advanced Technology
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Built for precision, speed, and safety.
          </p>
        </div>

        <div style={
          { display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem', 
          maxWidth: '1200px', 
          margin: '0 auto', 
          width: '100%' }}>
          
          <div style={
            { display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center', 
            padding: '3rem 2rem', 
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FDFF 100%)', 
            borderRadius: '2rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 10px 30px rgba(77,147,255,0.08)', 
            transition: 'transform 0.3s ease' }}>

            <div style={
              { backgroundColor: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '50%', 
              marginBottom: '1.5rem' }}>

              <img src={asset2} draggable="false" style={{ width: '64px', height: '64px', objectFit: 'contain', userSelect: 'none' }} alt="Feature 1" />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A3052', marginBottom: '0.75rem' }}>
              Modern Tech Stack
            </h3>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
              Built using Vite JS and powerful Machine Learning Tools like TensorFlow along with MobileNetV2.
            </p>
          </div>

          <div style={
            { display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center', 
            padding: '3rem 2rem', 
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FDFF 100%)', 
            borderRadius: '2rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 10px 30px rgba(77,147,255,0.08)', 
            transition: 'transform 0.3s ease' }}>

            <div style={
              { backgroundColor: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '50%', 
              marginBottom: '1.5rem' }}>

              <img src={asset3} draggable="false" style={{ width: '64px', height: '64px', objectFit: 'contain', userSelect: 'none' }} alt="Feature 2" />
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A3052', marginBottom: '0.75rem' }}>
              Instant Analysis
            </h3>

            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
              Detect skin risks and potential irregularities in mere seconds with optimized image processing.
            </p>
          </div>
          
          <div style={
            { display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            textAlign: 'center', 
            padding: '3rem 2rem', 
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FDFF 100%)', 
            borderRadius: '2rem', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 10px 30px rgba(77,147,255,0.08)', 
            transition: 'transform 0.3s ease' }}>
              
            <div style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <img src={asset4} draggable="false" style={{ width: '64px', height: '64px', objectFit: 'contain', userSelect: 'none' }} alt="Feature 3" />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A3052', marginBottom: '0.75rem' }}>
              Secure & Private
            </h3>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
              Fast, accurate, and secure screening designed to prioritize user data safety and confidentiality.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}