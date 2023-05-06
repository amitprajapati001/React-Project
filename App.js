const head1=React.createElement("h1",{},"Hi Evreyone")
const head2=React.createElement("h2",{},"head 2")
const container=React.createElement("div",{id:"container"},[head1,head2])




const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(container)