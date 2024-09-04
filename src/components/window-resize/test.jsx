import useWindowResize from "."


export default function UseWindowResizeTest(){

    const windowSize = useWindowResize();
    const {width, height} = windowSize;
    return (
        <div>
            <h1>
                Use Window resize Hook
            </h1>
            <p>
                Width: {width}
            </p>
            <p>
                Height: {height}
            </p>
        </div>
    )
}