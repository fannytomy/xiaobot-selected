import Image from "next/image";
import Link from "next/link";

const navigation = {
  legal: [
    { name: '隐私协议', href: '/privacy-policy' },
    { name: '条款和条件', href: '/terms-of-service' },
  ],
  blog: [
    { name: '上新', href: '/blog' },
    { name: '发现', href: '/explore' },
    { name: '创作者', href: '/creators' },
  ],
  credit: [
    { name: 'xiaobot.net', href: 'https://xiaobot.net' },
    { name: 'xiaobaot.top', href: 'https://xiaobaot.top' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-100 mx-auto pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div id="footer-heading" className="sr-only">
        Footer
      </div>
      <div className="mx-auto max-w-5xl px-6 py-4 pt-10 border-t border-gray-300 text-sm">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-6">
            <div className="flex items-center lg:flex-1">
              <Link href={`/`} className="-m-0 p-1.5">
                <Image
                  className="h-8 w-auto"
                  src="/xiaobot_s.svg"
                  alt="xiaobaotong.store"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href={`/`} className="text-xl text-red-600 font-bold">小报童专栏<br/>精选导航站</Link>
            </div>            
          </div>
          <div className="mt-2 flex grid-cols-1 gap-8 xl:col-span-2 xl:mt-0 justify-end">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className="text-sm font-bold leading-6 text-red-600">Blog</div>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.blog.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.href}`} className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  <div className="text-medium leading-6 text-red-600 font-bold">
                    Legal
                  </div>
                  <ul role="list" className="mt-6 space-y-2">
                    {navigation.legal.map((item) => {
                      return (
                        <li key={item.name}>
                          <Link
                            href={`${item.href}`}
                            className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div>
              <div className="text-medium font-semibold leading-6 text-red-600">CREDIT TO</div>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.credit.map((item) => {
                  return (
                    <li key={item.name}>
                      <Link
                        href={`${item.href}`}
                        target={"_blank"}
                        className="text-sm leading-6 whitespace-nowrap text-red-400 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}