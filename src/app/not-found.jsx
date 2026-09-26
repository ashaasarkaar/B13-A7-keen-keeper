import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
 return (
         <div className="bg-base-100 text-base-content min-h-screen">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          className="bg-base-200 border-base-300"
          style={{
            width: "100%",
            maxWidth: "550px",
            textAlign: "center",
            padding: "60px 30px",
            borderRadius: "24px",
            border: "1px solid",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            style={{
              fontSize: "110px",
              fontWeight: "900",
              lineHeight: "1",
              color: "#8b5cf6",
              textShadow: "0 0 35px rgba(139, 92, 246, 0.45)",
            }}
          >
            404
          </div>

          <h1
            style={{
              fontSize: "30px",
              margin: "25px 0 12px",
            }}
          >
            Page Not Found
          </h1>

          <p
            className="text-base-content/60"
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

         <Link href='/pages/homepage'>
          <button
            
            style={{
              padding: "13px 26px",
              border: "none",
              borderRadius: "10px",
              background: "#8b5cf6",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(139, 92, 246, 0.25)",
            }}
          >
            Go Back Home
          </button>
         </Link>
        </div>
      </div>
    </div>
    );
};

export default NotFoundPage;