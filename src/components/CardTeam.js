import React from "react"
import linkedinblack from "../images/linkedin_black.svg"

export default function CardTeam({
  imgsize,
  memberpicture,
  linkedinurl,
  name,
  position,
  description,
  companylogo,
}) {
  return (
    <div className="container card  w-75 border-0 pt-5 bg-transparent">
      <img
        className={`card-img-top w-${imgsize} rounded-0`}
        src={memberpicture}
        alt={`${name}`}
      />
      <div className="card-body px-0">
        <a href={linkedinurl}>
          <img
            src={linkedinblack}
            alt="Linkedin button"
            width="20"
            height="20"
          />
        </a>
        <h5 className="card-title pt-3">{name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{position}</h6>
        <div className="card-text">{description}</div>
        <img src={companylogo} alt="Uber Logo" className="img-logo-card py-4" />
      </div>
    </div>
  )
}
