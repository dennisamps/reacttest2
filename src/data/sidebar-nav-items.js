export default function() {
  return [
    {
      title: "Overview",
      to: "/Overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Personal/Academic Tutor",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/Tutor",
    },
    {
      title: "Lecturer Portal",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/LecturerPortal",
    },
    {
      title: "Student Portal",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/StudentPortal",
    },
    {
      title: "Modules",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/Modules",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
