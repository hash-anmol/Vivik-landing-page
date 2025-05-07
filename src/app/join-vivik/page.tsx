import { Footer } from '../components/footer';

export default function JoinVivik() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center px-0 py-0 bg-white">
        <iframe
          title="Join VIVIK Airtable Form"
          className="airtable-embed"
          src="https://airtable.com/embed/appxNajtykdADw39g/pagj02KBr5VTKt2cp/form"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ background: 'transparent', border: 'none', minHeight: '100vh' }}
          allowFullScreen
        >
          Your browser does not support iframes. You can access the form directly at {" "}
          <a href="https://airtable.com/appxNajtykdADw39g/pagj02KBr5VTKt2cp/form" target="_blank" rel="noopener noreferrer">this link</a>.
        </iframe>
      </main>
      <Footer />
    </>
  );
} 