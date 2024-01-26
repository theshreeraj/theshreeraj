import ExamplePdf from "../assets/resume.pdf";

function DownloadResumeButton() {
  return (
    <div className="">
      <a
        className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-black rounded-md group text-white"
        href={ExamplePdf}
        download="Shreeraj Mane Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button>Resume</button>
      </a>
    </div>
  );
}

export default DownloadResumeButton;
