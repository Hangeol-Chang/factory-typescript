
export default function Game({className} : {className : string}) {

    return (
        <div
            className={className}
            style={{
                height : 720,
                width : 1280,
                backgroundColor : 'rgba(200, 200, 200, 0.5)',
            }}
        >
            Kamen game Main comp

            <div
                style={{
                    width : 100,
                    height : 100,
                    borderWidth : 5,
                    borderRadius : 100,
                    borderColor : 'blue',
                    backgroundColor : 'red'
                }}
            >
                원형 오브젝트
            </div>
            
        </div>
    )
}