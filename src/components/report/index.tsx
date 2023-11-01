import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PdfReportGenerator = ({ data }) => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
    });

    const columns = [
      "Employee Name",
      "Shift Name",
      "Assigned Date",
      "Start Time",
      "End Time",
      "Start Date",
      "End Date",
    ];
    const rows = data.map((item) => [
      item.employee,
      item.shift.name,
      item.shift.assignedDate,
      item.shift.startTime,
      item.shift.endTime,
      item.shift.startDate,
      item.shift.endDate,
    ]);
    // Set page size and orientation (portrait or landscape)

    pdf.autoTable(columns, rows, {
      startY: 70, // Adjust the vertical position for the table
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

    const base64 = pdf.output("datauristring");
    const dataUri = base64.replace(
      "data:application/pdf;filename=generated.pdf;base64,",
      "",
    );

    // Convert base64 to Uint8Array
    const uint8Array = new Uint8Array(
      atob(dataUri)
        .split("")
        .map((c) => c.charCodeAt(0)),
    );

    // Create a blob from Uint8Array
    const blob = new Blob([uint8Array], { type: "application/pdf" });

    // Generate URL for the blob
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shift_report.pdf";
    a.click();

    // window.open(url);
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
