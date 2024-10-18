"use client"
const Loading = () => {
    return (
      <div className="loading-container flex justify-center items-center w-full h-screen">
        <div className="loading-circle"></div>
        <span className="loading-text">Loading ...</span>
        <style jsx>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
            height: 100vh;
            width: 100vw;
            position: relative;
          }
          .loading-circle {
            width: 80px;
            height: 80px;
            border: 10px solid #3498db;
            border-top: 10px solid #f3f3f3;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
          }
          .loading-text {
            margin-top: 20px;
            font-size: 1.5rem;
            color: white;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }
  
  export default Loading;
  