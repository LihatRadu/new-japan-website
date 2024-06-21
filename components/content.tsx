import { AuroraBackground } from "./ui/AuroraBackground";

const Content = ({children}: any) => {
    return (
        <div>
            <h1>
                <AuroraBackground className=" from-red-500 to-black-200" showRadialGradient={true}>
                    {children}
                </AuroraBackground>
            </h1>
        </div>
    )
}

export default Content;