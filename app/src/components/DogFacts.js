import React, { useEffect } from 'react'
import { getDogFacts } from '../Actions'
import { connect } from 'react-redux'



const DogFacts = (props) => {
    const { facts, isFetching, error } = props
    useEffect(() => {
        props.getDogFacts()
    }, [])
    if(error){
        return <h2>Not able to load facts...</h2>
    }
    if(isFetching){
        return <h2>Finding dog facts for you!</h2>
    }
    const handleClick = () => {
        props.getDogFacts()
    }

    return (
        <>
        <div>
            <h2>Did you know...{facts}</h2>
        </div>
        <button onClick={handleClick}>More Facts!</button>
        </>
    )
}
const mapStateToProps = state => {
    return {
    facts: state.facts, 
    error: state.error,
    isFetching: state.isFetching,
  }
}

export default connect(mapStateToProps, {getDogFacts})(DogFacts)

