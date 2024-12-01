import type { Action } from '../types/action';

export const mockActions: Action[] = [
  {
    id: '1',
    name: 'Taller de Innovación Tecnológica',
    location: 'CIFP César Manrique',
    description: 'Taller práctico sobre nuevas tecnologías aplicadas a la FP con enfoque en metodologías ágiles y desarrollo de software. Los estudiantes trabajaron en proyectos reales utilizando herramientas profesionales.',
    startDate: '2024-02-15',
    endDate: '2024-02-15',
    departments: ['DEP-INF'],
    professionalFamilies: ['INF'],
    selectedGroups: ['1-1-1', '1-1-2'],
    studentParticipants: 25,
    teacherParticipants: 3,
    rating: 4,
    comments: 'Excelente participación de los alumnos. Se logró una gran interacción con profesionales del sector.',
    createdBy: 'manager-001',
    network: 'RED-INNOVA-1',
    center: 'CIFP César Manrique',
    quarter: '1-2',
    objectives: ['1', '2', '5'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    documentUrl: 'https://example.com/docs/informe-taller.pdf',
    documentName: 'Informe del Taller.pdf',
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Jornada de Emprendimiento',
    location: 'CIFP San Cristóbal',
    description: 'Jornada dedicada al fomento del emprendimiento en FP. Se contó con la participación de emprendedores locales que compartieron sus experiencias y realizaron mentorías con los estudiantes.',
    startDate: '2024-03-01',
    endDate: '2024-03-01',
    departments: ['DEP-ADM'],
    professionalFamilies: ['ADM'],
    selectedGroups: ['2-1-1', '2-1-2'],
    studentParticipants: 40,
    teacherParticipants: 5,
    rating: 5,
    comments: 'Gran interés por parte de los participantes. Se establecieron contactos valiosos con el sector empresarial.',
    createdBy: 'manager-002',
    network: 'RED-INNOVA-1',
    center: 'CIFP San Cristóbal',
    quarter: '1-2',
    objectives: ['4', '5'],
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    documentUrl: 'https://example.com/docs/memoria-jornada.pdf',
    documentName: 'Memoria de la Jornada.pdf',
    createdAt: '2024-03-01T09:00:00Z',
    updatedAt: '2024-03-01T09:00:00Z',
  },
  {
    id: '3',
    name: 'Proyecto de Innovación Sostenible',
    location: 'CIFP Los Gladiolos',
    description: 'Proyecto interdepartamental enfocado en la sostenibilidad y el medio ambiente. Los estudiantes desarrollaron soluciones innovadoras para problemas medioambientales locales.',
    startDate: '2024-03-15',
    endDate: '2024-03-30',
    departments: ['DEP-INF', 'DEP-ADM'],
    professionalFamilies: ['INF', 'ADM'],
    selectedGroups: ['1-1-1', '2-1-1'],
    studentParticipants: 35,
    teacherParticipants: 4,
    rating: 5,
    comments: 'Proyecto muy exitoso que ha generado gran impacto en la comunidad educativa.',
    createdBy: 'subnet-001',
    network: 'RED-INNOVA-1',
    center: 'CIFP Los Gladiolos',
    quarter: '1-2',
    objectives: ['2', '5'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    documentUrl: 'https://example.com/docs/proyecto-sostenible.pdf',
    documentName: 'Proyecto Sostenible.pdf',
    createdAt: '2024-03-15T10:00:00Z',
    updatedAt: '2024-03-15T10:00:00Z',
  }
];