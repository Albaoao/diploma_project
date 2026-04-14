import Hero from "../components/Hero/Hero";
import WhatIsBloomy from "../components/WhatIsBloomy/WhatIsBloomy";

export default function HomePage({ onRegister }) {
    return (
        <>
            
            <Hero onStart={onRegister} />
            <WhatIsBloomy />
        </>
    );
}
