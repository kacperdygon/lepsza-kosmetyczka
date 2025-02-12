import {getUsers} from "@/api/users.ts";

export interface Treatment{
  id: number;
  title: string;
  description: string;
  price: number;
}

export function saveTreatments(treatmentArray: Treatment[]){
  localStorage.setItem("treatments", JSON.stringify(treatmentArray));
}

export function getTreatments(): Treatment[] {
  const storedTreatments = localStorage.getItem("treatments");
  let parsedStoredTreatments;

  if (storedTreatments) {
    parsedStoredTreatments = JSON.parse(storedTreatments);
  } else {
    parsedStoredTreatments = [];
  }

  return parsedStoredTreatments as Treatment[];
}

export function addTreatment(title: string, description: string, price: number){
  const treatmentArray = getTreatments();

  let nextId;
  if (treatmentArray.length == 0) {
    nextId = 0;
  } else {
    nextId = treatmentArray[treatmentArray.length - 1].id + 1;
  }

  const newTreatment = {
    id: nextId,
    title: title,
    description: description,
    price: price
  }

  treatmentArray.push(newTreatment);
  saveTreatments(treatmentArray);

}

export function deleteTreatment(id: number){
  const treatments = getTreatments();

  const filteredTreatments = treatments.filter(treatment => treatment.id !== id )

  saveTreatments(filteredTreatments);
}

export function getTreatmentById(id: number) {
  const treatments = getTreatments();
  const treatmentIndex = treatments.findIndex(treatment => treatment.id === id);
  return treatments[treatmentIndex];
}
