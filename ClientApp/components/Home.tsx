import * as React from "react"
import * as ReactDOM from "react-dom"

type HomepageComponentState = {}
type HomepageComponentProps = {}

export class HomepageComponent extends React.Component<HomepageComponentProps, HomepageComponentState> {
    constructor(props: HomepageComponentProps, context: any) {
        super(props, context)
        this.state = {}}
    


render(){
    return <div>
        <h1>Kip</h1>
        </div>
 
}
}