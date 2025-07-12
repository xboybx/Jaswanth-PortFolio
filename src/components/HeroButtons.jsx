import { ArrowRight, FileDown } from 'lucide-react';
export function HeroButtons({ onNavigate }) {
  const handleDownloadResume = () => {
    // Create a dummy PDF URL (replace with actual resume URL in production)
    // const dummyPdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const dummyPdfUrl = './Jaswanth-2024-Resume.pdf';


    // Create a temporary link element
    const link = document.createElement('a');
    link.href = dummyPdfUrl;
    link.download = 'Jaswanth-2024-Resume.pdf'; // Suggested filename
    link.target = '_blank';

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={handleDownloadResume}
        className="btn-secondary flex items-center gap-2"
      >
        <FileDown className="w-4 h-4" />
        <span>Resume</span>
      </button>

      <button
        onClick={() => onNavigate('projects')}
        className="btn-primary flex items-center gap-2"
      >
        <span>View Projects</span>
        <ArrowRight className="w-4 h-4" />
      </button>


      {/* github button */}
      <a href="https://github.com/xboybx">   <button
        className="btn-primary flex items-center gap-2" style={{ backgroundColor: "#2c2c2c" }}
      >
        <i class="fa-brands fa-github"></i>
      </button></a>


      {/* linkedin button */}
      <a href="https://www.linkedin.com/in/jjaswanth"> <button
        className="btn-primary flex items-center gap-2" style={{ backgroundColor: "#0072b1" }}
      >
        <i class="fa-brands fa-linkedin-in"></i>
      </button></a>


    </div>
  );
}