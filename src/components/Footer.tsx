export function Footer() {
  return (
    <footer className="py-10 text-sm text-gray-600">
      <div className="flex items-center justify-between">
        <p>© {new Date().getFullYear()} Son Tran</p>
        <div className="flex gap-4">
          <a href="https://github.com/smtran8">GitHub</a>
          <a href="https://www.linkedin.com/in/msontran/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}


