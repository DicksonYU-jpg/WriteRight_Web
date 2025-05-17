import React, { useEffect, useState } from "react";
import Faq from 'react-faq-component';
import { useThemeStore } from "../../store/ThemeStore";
import useLangStore from "../../store/LangStore";

const data_en = {
    title: "Frequently Asked Questions",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const data_cn = {
    title: "常見問題",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};

const styles = {
    bgColor: 'rgba(255, 255, 255, 0)',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'black',
    arrowColor: "black",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export const FAQ = () => {
    const { lang } = useLangStore();
    const { theme } = useThemeStore();
    
    const currentStyles = {
        bgColor: 'rgba(255, 255, 255, 0)',
        titleTextColor: theme === "light" ? "black" : "white",
        rowTitleColor: theme === "light" ? "black" : "white",
        rowContentColor: theme === "light" ? "black" : "white",
        arrowColor: theme === "light" ? "black" : "white",
    };
    return (
        <section id="faq">
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-left lg:min-w-5xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                    {lang === "en" ? (
                        <Faq 
                        data={data_en}
                        styles={currentStyles}
                        />
                    ) : (
                        <Faq
                        data={data_cn}
                        styles={currentStyles}
                        />
                    )}
                </div> 
            </div>
        </section>
        
    );
}