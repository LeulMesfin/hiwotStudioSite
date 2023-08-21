import '@/styles/globals.css';


/* should store the navbar and footer */
export default function App({ Component, pageProps }) {
  return (
    <main className="w-full min-h-screen"> 
        <div className="max-w-[1920px] mx-auto"> 
            <Component {...pageProps} />
        </div>
    </main>
  );

}