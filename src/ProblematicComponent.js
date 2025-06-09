function ProblematicComponent() {
    throw new Error("Something broke inside this component!");
    return <div>This will not render</div>;
  }
  export default ProblematicComponent;