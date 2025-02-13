import Cookies from 'js-cookie'
import { getTreatmentById } from '@/api/treatments.ts'
import { getEmployeeById } from '@/api/employees.ts'

export enum AvaibleTimes {
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
}

export interface Visit {
  id: number
  name: string
  email: string
  phone: string
  employeeId: number
  treatmentId: number
  date: Date
  time: AvaibleTimes
  additionalComments: string
  userId: number | null
}

export function saveVisits(userArray: Visit[]) {
  localStorage.setItem('visits', JSON.stringify(userArray))
}

export function getVisits(): Visit[] {
  const storedVisits = localStorage.getItem('visits')

  let parsedStoredVisits

  if (storedVisits) {
    parsedStoredVisits = JSON.parse(storedVisits)
  } else {
    parsedStoredVisits = []
  }

  return parsedStoredVisits as Visit[]
}

export function addVisit(
  name: string,
  email: string,
  phone: string,
  employeeId: number,
  treatmentId: number,
  date: Date,
  time: AvaibleTimes,
  additionalComments: string,
) {
  const visitArray = getVisits()

  let nextId
  if (visitArray.length == 0) {
    nextId = 0
  } else {
    nextId = visitArray[visitArray.length - 1].id + 1
  }

  const userId = Number(Cookies.get('userId')) ?? null

  const newVisit = {
    id: nextId,
    name: name,
    email: email,
    phone: phone,
    employeeId: employeeId,
    treatmentId: treatmentId,
    date: date,
    time: time,
    additionalComments: additionalComments,
    userId: userId,
  }

  visitArray.push(newVisit)
  saveVisits(visitArray)

  return nextId
}

export function deleteVisit(id: number) {
  const visits = getVisits()

  const filteredVisits = visits.filter((visit) => visit.id !== id)

  saveVisits(filteredVisits)
}

export function getVisitById(id: number): Visit {
  const visits = getVisits()
  const filteredVisits = visits.filter((visit) => visit.id == id)
  return filteredVisits[0]
}

export function getAvailableTimes(employeeId: number, date: Date): AvaibleTimes[] {
  const visits = getVisits() // Pobieramy wszystkie wizyty

  // Pobranie wizyt dla danego pracownika w danym dniu
  const bookedTimes = visits
    .filter(
      (visit) =>
        visit.employeeId === employeeId &&
        new Date(visit.date).toDateString() === date.toDateString(),
    )
    .map((visit) => visit.time)

  // Pobranie tylko wartości enum jako AvaibleTimes[]
  const allTimes = Object.values(AvaibleTimes).filter(
    (time) => typeof time === 'string',
  ) as unknown as AvaibleTimes[]

  // Zwrócenie dostępnych godzin
  return allTimes.filter((time) => !bookedTimes.includes(time))
}

export function getVisitsOfClient() {
  const visits = getVisits()

  const userId = Number(Cookies.get('userId')) ?? null

  const filteredVisits = visits.filter((visit) => visit.userId === userId)
  return filteredVisits.map((visit) => {
    return {
      ...visit,
      treatmentTitle: getTreatmentById(visit.treatmentId).title,
      employeeName: getEmployeeById(visit.employeeId).username,
    }
  })
}

export function getVisitsOfEmployee() {
  const visits = getVisits()

  const userId = Number(Cookies.get('userId')) ?? null

  const filteredVisits = visits.filter((visit) => visit.employeeId === userId)
  return filteredVisits.map((visit) => {
    return {
      ...visit,
      treatmentTitle: getTreatmentById(visit.treatmentId).title,
      employeeName: getEmployeeById(visit.employeeId).username,
    }
  })
}
