// A template (unlike a layout) re-mounts on every navigation, so the panel
// rises into place each time you change page.
export default function Template({ children }) {
  return (
    <div className='px-3 pt-[5.5rem] sm:px-4 lg:pt-[9.5rem]'>
      <div className='panel-in mx-auto max-w-[62rem] bg-paper/[0.97] p-3 shadow-[0_30px_80px_-40px_rgba(52,64,75,0.5)] sm:p-4'>
        <div className='border border-ink/25'>{children}</div>
      </div>
    </div>
  );
}
