import './globals.css'

export const metadata = {
  title: 'Gus Lima | Software Engineer',
  description: "Welcome to my personal website! I am a passionate problem solver dedicated to improving people's lives through innovative solutions. With 7+ years of experience in software development, my current focus lies in creating user-centric front-end web applications. I possess a strong understanding of front-end development principles and constantly update my skills by exploring new techniques and tools. As a team player, I strive to exceed expectations and deliver outstanding results for every project I undertake. Join me on this curious, dedicated, and goal-oriented journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
