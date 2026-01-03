"use client";
import React, { useState, useEffect } from "react";
import UI from "@ui";
import { serverEdge, storageObject } from "./_data";

export default function App(props) {
  function dataPrep(d) {
    return [d.name, d.core, `${d.ram} GB`, `${d.storage} GB`, d.price.toLocaleString("id-ID")];
  }
  return (
    <UI.Col className="min-h-[720px] p-2 md:p-[5%] gap-3 bg-[#f0f0f0]">
      <UI.Text variant="title24" className="font-bold scroll-mt-20" id="edgeserver">
        Edge Server
      </UI.Text>
      <UI.Text variant="subtitle" className="max-w-[1024px]">
        Infrastruktur modern berbasis teknologi Dokploy, memberikan akses penuh tanpa perlu SSH. Dilengkapi dengan autoscaling dan penyimpanan NVMe berkecepatan
        tinggi untuk performa optimal.
      </UI.Text>
      <UI.Col>
        <TableRender data={["Service", "vCORE", "RAM", "Storage", "Harga/Tahun"]} header />
        {serverEdge.map((d, ix) => (
          <TableRender key={ix} data={dataPrep(d)} />
        ))}
      </UI.Col>

      <UI.Text variant="title24" className="font-bold  mt-[60px] scroll-mt-20" id="objectstorage">
        N9 Object Storage
      </UI.Text>
      <UI.Text variant="subtitle" className="max-w-[1024px]">
        Layanan penyimpanan data terdistribusi yang andal dan aman, dirancang untuk menyimpan serta mengelola data dengan protokol AWS S3.
      </UI.Text>
      <UI.Col>
        <TableRender data={["Service", "Harga"]} header />
        {storageObject.map((d, ix) => (
          <TableRender key={ix} data={[d.name, d.price]} />
        ))}
      </UI.Col>
    </UI.Col>
  );
}

function TableRender({ data, header }) {
  return (
    <UI.Row className={`bg-white ${header && "bg-[#f2f7fa] font-bold"} p-2`}>
      {data.map((d, ix) => (
        <UI.Col key={ix} className="flex-1">
          <UI.Text variant="body1">{d}</UI.Text>
        </UI.Col>
      ))}
    </UI.Row>
  );
}
