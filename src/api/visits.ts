
export interface Visit{
  id: number;
  title: string;
  description: string;
  price: number;
}

export function saveVisits(userArray: Visit[]){
  localStorage.setItem("visits", JSON.stringify(userArray));
}

export function getVisits(): Visit[] {
  const storedVisits = localStorage.getItem("Visits");
  let parsedStoredVisits;

  if (storedVisits) {
    parsedStoredVisits = JSON.parse(storedVisits);
  } else {
    parsedStoredVisits = [];
  }

  return parsedStoredVisits as Visit[];
}

export function addVisit(title: string, description: string, price: number){
  const visitArray = getVisits();

  let nextId;
  if (visitArray.length == 0) {
    nextId = 0;
  } else {
    nextId = visitArray[visitArray.length - 1].id + 1;
  }

  const newVisit = {
    id: nextId,
    title: title,
    description: description,
    price: price
  }

  visitArray.push(newVisit);
  saveVisits(visitArray);

}

export function deleteVisit(id: number){
  const Visits = getVisits();

  const filteredVisits = Visits.filter(Visit => Visit.id !== id )

  saveVisits(filteredVisits);
}
