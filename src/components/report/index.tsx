import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfReportGenerator = ({ data }) => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: "l",
      unit: "mm",
      format: "a3",
      putOnlyUsedFonts: true,
    });

    data.forEach((shift, index) => {
      const columns = [
        "Employee Name",
        "Email",
        "Phone",
        "Shift Name",
        "Start Time",
        "End Time",
        "Start Date",
        "End Date",
      ];

      const rows = [];

      if (index > 0) {
        pdf.addPage();
      }

      pdf.setFontSize(14);
      pdf.text("Shift Name: " + shift.shiftName, 20, 10);
      pdf.setFontSize(12);
      pdf.text("Company: ShiftWise Solutions", 20, 20);
      pdf.text("Report Date: " + new Date().toLocaleDateString(), 20, 30);

      shift.Users.forEach((user) => {
        const row = [
          user.name,
          user.email,
          user.phone || "N/A",
          shift.shiftName,
          shift.startTime,
          shift.endTime,
          user.EmployeeShift?.startDate,
          user.EmployeeShift?.endDate,
        ];
        rows.push(row);
      });

      const startY = 50;

      pdf.autoTable(columns, rows, {
        startY: startY,
        theme: "grid",
        styles: {
          font: "times",
          halign: "center",
          cellPadding: 3.5,
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
          textColor: [0, 0, 0],
        },
        headStyles: {
          textColor: [0, 0, 0],
          fontStyle: "normal",
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
          fillColor: [166, 204, 247],
        },
        alternateRowStyles: {
          fillColor: [212, 212, 212],
          textColor: [0, 0, 0],
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
        },
        rowStyles: {
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
        },
        tableLineColor: [0, 0, 0],
      });
    });

    const base64 = pdf.output("datauristring");
    const dataUri = base64.replace(
      "data:application/pdf;filename=generated.pdf;base64,",
      "",
    );

    const uint8Array = new Uint8Array(
      atob(dataUri)
        .split("")
        .map((c) => c.charCodeAt(0)),
    );

    const blob = new Blob([uint8Array], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shift_report.pdf";
    a.click();
  };

  return (
    <div>
      <button
        className="bg-secondary text-white px-8 py-2 rounded-[5px] mr-1"
        onClick={generatePDF}
      >
        Generate Report
      </button>
    </div>
  );
};

export default PdfReportGenerator;
