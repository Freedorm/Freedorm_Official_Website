import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl text-white font-bold mb-4">Freedorm-随心锁域</h3>
            <p className="text-sm">推门既入，智慧如影随形</p>
            <p className="text-sm">用我们的努力，让南科大的住宿体验更便捷、更温暖</p>
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://freedorm.taobao.com/" className="hover:text-gray-300 transition-colors">
                  官方店铺
                </a>
              </li>
              <li>
                <Link href="/installation#top" className="hover:text-gray-300 transition-colors">
                  安装说明
                </Link>
              </li>
              <li>
                <Link href="/aftersale#top" className="hover:text-gray-300 transition-colors">
                  售后服务
                </Link>
              </li>
              <li>
                <a href="/#faq" className="hover:text-gray-300 transition-colors">
                  常见问题
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">联系我们</h4>

            <ul className="space-y-2">
              <li>
                <a href="mailto:support@freedorm.net" className="hover:text-gray-300 transition-colors">
                  邮箱: support@freedorm.net
                </a>
              </li>
              <li>
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?k=kKqSZnLWwfxAhvrdulAG_EScDFGiObK_&jump_from=webapi&authKey=qRz51dNGprieuHXjxN+OddxEO/69VJMZ5jJRCpv3QvtWyyQmmu1FMvp3ASyDkSMl"
                  className="hover:text-gray-300 transition-colors"
                >
                  售后群: 1014153547
                </a>
              </li>
              <li>
                <div className="flex space-x-4">
                  <a href="https://github.com/freedorm" className="hover:text-gray-300 transition-colors">
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zhengyang-cao-323152284/"
                    className="hover:text-gray-300 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://qm.qq.com/cgi-bin/qm/qr?k=kKqSZnLWwfxAhvrdulAG_EScDFGiObK_&jump_from=webapi&authKey=qRz51dNGprieuHXjxN+OddxEO/69VJMZ5jJRCpv3QvtWyyQmmu1FMvp3ASyDkSMl"
                    className="hover:text-gray-600 transition-colors"
                  >
                    <svg
                      t="1738511671169"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="2024"
                      width="24"
                      height="24"
                    >
                      <path
                        d="M870.4512 555.008a273.92 273.92 0 0 0-55.296-99.328v-4.096a153.6 153.6 0 0 0-17.408-71.68 291.84 291.84 0 0 0-285.696-292.864 291.328 291.328 0 0 0-285.184 293.376 153.6 153.6 0 0 0-17.408 71.168v3.072a282.624 282.624 0 0 0-55.808 102.4c-27.136 89.088-21.504 190.976 41.472 212.992l12.288 3.072c-8.704 14.336-13.312 30.8224-13.312 47.616 0 68.608 74.752 118.272 177.664 118.272a235.52 235.52 0 0 0 131.072-35.328h18.432a235.008 235.008 0 0 0 130.56 35.328c102.4 0 178.176-51.2 178.176-118.272a87.552 87.552 0 0 0-13.824-47.616 51.2 51.2 0 0 0 12.8-3.072c62.976-24.064 68.608-125.952 41.472-215.04z m-77.824 132.608a33.792 33.792 0 0 0-30.72-12.8 33.792 33.792 0 0 0-27.648 18.944 346.112 346.112 0 0 1-23.552 36.864 36.352 36.352 0 0 0-6.144 30.72 35.84 35.84 0 0 0 20.48 24.064c20.992 9.216 34.304 22.016 34.304 33.28 0 22.016-46.08 46.592-107.52 46.592a153.6 153.6 0 0 1-96.256-27.648 35.84 35.84 0 0 0-25.6-8.704 204.8 204.8 0 0 1-35.328 0 34.816 34.816 0 0 0-26.112 8.704 153.6 153.6 0 0 1-96.768 27.648c-61.44 0-107.008-24.576-107.008-46.592 0-11.264 13.312-24.064 34.816-33.28a36.864 36.864 0 0 0 13.824-55.296 247.296 247.296 0 0 1-23.04-36.864 37.376 37.376 0 0 0-27.648-18.944 37.888 37.888 0 0 0-31.232 12.8 72.704 72.704 0 0 1-12.8 13.312 167.936 167.936 0 0 1 0-124.416 209.92 209.92 0 0 1 51.2-83.456 35.328 35.328 0 0 0 10.752-31.744 68.608 68.608 0 0 1 0-10.24 86.528 86.528 0 0 1 11.776-40.96 41.984 41.984 0 0 0 5.12-24.576 220.16 220.16 0 0 1 214.528-226.304 221.184 221.184 0 0 1 215.04 227.84 33.28 33.28 0 0 0 5.12 20.992c8.0384 13.312 12.4416 28.4672 12.8 44.032 0.256 3.584 0.256 7.168 0 10.752a37.376 37.376 0 0 0 9.216 30.72 204.8 204.8 0 0 1 51.2 82.944 176.128 176.128 0 0 1 3.584 123.904 40.96 40.96 0 0 1-16.384-12.288z"
                        fill="#ffffff"
                        p-id="2025"
                      ></path>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-20 text-center">
          <p>&copy; 2025 Freedorm-随心锁域 团队. 保留所有权利.</p>
          <p>
            备案号：
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
              豫ICP备2024105509号-2
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

