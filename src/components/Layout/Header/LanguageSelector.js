import { useRouter } from 'next/router';

const LanguageSelector = () => {
    const router = useRouter();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        router.replace(router.pathname, router.asPath, { locale: selectedLanguage });
    };

    return (
        <div className="language-selector">
            <select
                id="language"
                onChange={handleLanguageChange}
                value={router.locale}
                style={{
                    padding: '8px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    background: '#c58940',
                    color: '#fff',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                }}
            >
                <option value="en">English</option>
                <option value="es">Español</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
