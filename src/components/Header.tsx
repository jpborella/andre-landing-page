import { data } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    const whatsapp = `https://wa.me/${data.contato.whatsapp}`
    const linkedin = data.contato.linkedin

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-gradient-to-r from-[#123021] to-[#D64000]">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center sm:ml-10 ml-0">
                        <img src="/images/logo1.png" alt="logo1" className="h-10 md:h-12 lg:h-16" />
                        <img src="/images/logo2.png" alt="logo2" className="h-8 md:h-10 lg:h-12" />
                    </div>
                    <div className="flex items-center gap-1 sm:gap-3 sm:mr-10 mr-0">
                        <a href={whatsapp} target="_blank" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faWhatsapp} className='text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
                        </a>
                        <a href={linkedin} target="_blank" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} className='text-blue-600 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
