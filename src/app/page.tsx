export default function Home() {
  return (
    <main className="font-mono h-screen bg-gray-950 text-white flex items-center justify-center flex-col gap-5">
      <img className="h-16 w-16 rounded-full" src="https://avatars.githubusercontent.com/u/17850043" alt="Profile" />
      <h1 className="text-slate-400 text-lg">Gus Lima<span className="text-slate-500 text-base border-l pl-3 ml-3 border-l-slate-700">Software Engineer</span></h1>
      <a className="border border-dashed rounded-md duration-500 transition-all hover:bg-slate-700 hover:text-slate-100 text-center border-slate-700 px-5 py-3 w-60  text-xs text-slate-400" href="https://www.linkedin.com/in/eugustavolima/" target="_blank">
        LinkedIn
      </a>
      <a className="border border-dashed rounded-md duration-500 transition-all hover:bg-slate-700 hover:text-slate-100 text-center border-slate-700 px-5 py-3 w-60  text-xs text-slate-400" href="https://github.com/gustavofillchar" target="_blank">
        GitHub
      </a>
      <a className="border border-dashed rounded-md duration-500 transition-all hover:bg-slate-700 hover:text-slate-100 text-center border-slate-700 px-5 py-3  w-60  text-xs text-slate-400" href="mailto:guslimadev@gmail.com" target="_blank">
        Email
      </a>
      <a className="border border-dashed rounded-md duration-500 transition-all hover:bg-slate-700 hover:text-slate-100 text-center border-slate-700 px-5 py-3  w-60  text-xs text-slate-400" href="https://instagram.com/guslimadev" target="_blank">
        Instagram
      </a>
    </main>
  )
}
