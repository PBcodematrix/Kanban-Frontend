import React from 'react';
import styles from './Card.module.css';
import circle from "../../assets/circle.png";
import { faker } from '@faker-js/faker';
import { MappedIcons} from '../../utils/util';

const Card = ({ cardId, title,priority,available }) => {
  console.log(available);
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardId}>{cardId}</span>
        <div className={styles.assignee}>
          <img src={faker.image.avatar()} alt="Assignee" className={styles.assigneeImage} />
          <div className={styles.badge} style={{backgroundColor:available?"green":"#f0f1f2"}}></div>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.layout}>
      <div className={styles.border}>
        <img className={styles.PriorityIcon} src={MappedIcons[priority]}  alt="priorities" />
      
      </div>
      <div className={styles.border2}>
      <img className={styles.PriorityIcon} src={circle}  alt="circle" />
     <h1 style={{
      color: "rgba(0, 0, 0, 0.50)",
      fontSize: "10px",
      margin:"2px",
     }}>Feature Request</h1> 
      </div>
      </div>
      

    </div>
  );
};

export default Card;

