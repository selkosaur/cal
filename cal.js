//cal config here

export const calendarEl = document.getElementById("calendar");

export const calendar = new FullCalendar.Calendar(calendarEl, {
  googleCalendarApiKey: "AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE",
  initialView: "timeGridWeek",
  editable: true,
  //aspectRatio: 1,
  // initialDate: '2023-01-07',
  customButtons: {
    dayToggle: {
      text: "day \u21bb",
      hint: "toggle next day view",
      click: function () {
        let views = ["timeGridDay", "timeGridTwoDay", "timeGridThreeDay"];

        let thisview = views.indexOf(calendar.view.type);

        let nextview = views[thisview + 1];
        /* alert(
            "The view's type is " +
              calendar.view.type +
              " thisview: " +
              thisview +
              " views.length: " +
              views.length
          ); */
        if (thisview == views.length - 1) {
          calendar.changeView(views[0]);
        } else if (thisview == -1) {
          calendar.changeView(views[0]);
        } else {
          calendar.changeView(nextview);
        }
      },
    },
    yearToggle: {
      text: "year \u21bb",
      hint: "toggle next year view",
      click: function () {
        let views = ["yearMonth2Col", "multiMonthYear", "yearMonthStack"];
        let thisview = views.indexOf(calendar.view.type);
        let nextview = views[thisview + 1];
        //alert("The view's type is " + calendar.view.type + " thisview: " + thisview+ " views.length: " + views.length);
        if (thisview == views.length - 1) {
          calendar.changeView(views[0]);
        } else if (thisview == -1) {
          calendar.changeView(views[0]);
        } else {
          calendar.changeView(nextview);
        }
      },
    },
    allViewsToggle: {
      text: "all \u21bb",
      hint: "toggle next view",
      click: function () {
        let views = [
          "timeGridDay",
          "timeGridTwoDay",
          "timeGridThreeDay",
          "timeGridWeek",
          "dayGridMonth",
          "listWeek",
          "timeGrid14Day",
          "dayGridTwoWeek",
          "yearMonth2Col",
          "multiMonthYear",
          "yearMonthStack",
        ];
        let thisview = views.indexOf(calendar.view.type);
        let nextview = views[thisview + 1];
        //alert("The view's type is " + calendar.view.type + " thisview: " + thisview+ " views.length: " + views.length);
        if (thisview == views.length - 1) {
          calendar.changeView(views[0]);
        } else if (thisview == -1) {
          calendar.changeView(views[0]);
        } else {
          calendar.changeView(nextview);
        }
      },
    },
  },
  headerToolbar: {
    left: "prev,next today dayToggle,yearToggle,allViewsToggle",
    center: "title",
    right:
      "timeGridDay,timeGridTwoDay,timeGridThreeDay timeGridWeek,dayGridMonth,listWeek timeGrid14Day,dayGridTwoWeek yearMonth2Col,multiMonthYear,yearMonthStack",
  },
  buttonHints: {
    next: "next $0",
    prev: "prev $0",
    timeGridTwoDay: "2 days view",
    timeGridThreeDay: "3 days view",
    multiMonthYear: "year grid view",
    yearMonthStack: "year stack view",
    listWeek: "list view (week)",
  },

  views: {
    timeGrid14Day: {
      type: "timeGrid",
      duration: { days: 14 },
      buttonText: "14 day",
    },
    dayGridTwoWeek: {
      type: "dayGrid",
      duration: { weeks: 2 },
      buttonText: "2 weeks",
      businessHours: false,
    },
    yearMonthStack: {
      type: "multiMonthYear",
      buttonText: "stack",
      multiMonthMaxColumns: 1,
    },
    timeGridTwoDay: {
      type: "timeGrid",
      duration: { days: 2 },
      buttonText: "2 d",
    },
    timeGridThreeDay: {
      type: "timeGrid",
      duration: { days: 3 },
      buttonText: "3 d",
    },
    multiMonthYear: {
      buttonText: "grid",
      multiMonthMinWidth: 200,
    },
    yearMonth2Col: {
      type: "multiMonthYear",
      buttonText: "year",
      multiMonthMaxColumns: 2,
    },
    timeGridWeek: {},
  },

  eventColor: "var(--content-bg)",
  nowIndicator: true,
  eventInteractive: true,
  // US Holidays

  height: "100%",
});
calendar.render();
