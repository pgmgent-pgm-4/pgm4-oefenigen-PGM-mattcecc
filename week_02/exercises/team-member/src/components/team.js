import React from "react";
import styles from "./style.module.css";

export default function team() {
  const team = [
    {
      name: "Matt",
      familiename: "Cecc",
      role: "developer",
      email: "test@example.com",
      phone: "123456789",
    },
    {
      name: "John",
      familiename: "Doe",
      role: "member",
      email: "test@example.com",
      phone: "123456789",
    },
  ];

  return (
    <div>
      <h1 className={styles.h1}>Team</h1>
      <ul>
        {team.map((member, index) => (
            <li key={index} className={`${styles.card} ${styles[member.role]}`}>
            <h2>
              {member.name} {member.familiename}
            </h2>
            <p> {member.role}</p>
            <p>{member.email}</p>
            <p>{member.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
