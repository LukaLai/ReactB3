function Component1 (props)  {
    
    const {test} = props // affecte à test le parametre envoyer dans le props
    return (
        <p>HelloWorld {test}</p>
    )
}

export default Component1;