import Seo from '@/components/Seo';
import CustomLink from '@/components/CustomLink';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Nav />
      <main>
        <section className='bg-primary dark:bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-green-400 dark:text-white layout'>
            <h1 className='inline-flex items-center font-bold text-dark-400 hover:text-primary-400 animated-underline'>
              Mudassir Raza
            </h1>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://github.com/Mudassirraza912'>
                Mudassir Raza
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
