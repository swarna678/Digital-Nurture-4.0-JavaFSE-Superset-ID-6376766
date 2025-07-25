
import React from 'react'; 
import styles from './CohortDetails.module.css'; 

const CohortDetails = (props) => {
    
    const { cohort } = props;

   
    const headingClass = cohort.currentStatus === 'Ongoing' ? styles.ongoingStatus : styles.otherStatus;

    return (
        
        <div className={styles.box}>
            
            <h3 className={headingClass}>{cohort.name}</h3>

            
            <dl>
                
                <dt>Started On</dt>
                <dd>{cohort.startedOn}</dd> 
                <dt>Current Status</dt>
                <dd>{cohort.currentStatus}</dd> 

                <dt>Coach</dt>
                <dd>{cohort.coach}</dd> 

                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd> 
            </dl>
        </div>
    );
};

export default CohortDetails; 