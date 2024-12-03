import * as React from "react";

export const EmailTemplate = ({ FullName,Phone ,Msg}) => (
<div>
    
    <p><strong>Mon nom est : </strong>{FullName}</p>
    <p>Vous avez reçu un message d&apos;un contact intéressé par vos services :</p>
    <div>
      <p><strong>Nom : </strong>{FullName}</p>
      <p><strong>Numéro de téléphone : </strong>{Phone}</p> 
      <p><strong>Message : </strong>{Msg}</p>
    </div>
  </div>
);
