import React from "react";
import axios from "axios";
import { state } from "../interfaces/state";
import Tabla from "../components/table";
type MyProps = {};
export default class DashboardP extends React.Component<MyProps, state> {

    setState: state = {
        error: 'null',
        isLoaded: 'false',
        data: []
    };

    constructor(props: state) {
        super(props);
        this.setState({
            error: props.error,
            isLoaded: props.isLoaded,
            data: props.data
        })
    }

    componentDidMount() {
        axios.get("http://localhost:5000/all")
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    data: result.data
                });
                console.log(result, "holaaaaaaaa", this.setState);
            },
                (error) => {
                    console.log("ERRORR")
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });
    }

    render() {
        const { error, isLoaded, data } = this.setState;

        if (error) return <div className="col">Error: {error}</div>;

        if (!isLoaded) return <div className="col">Loading</div>;

        if (data) {
            return (
                <Tabla data={data} />
            );
        }
    }

}