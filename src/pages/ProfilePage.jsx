import React from "react";

// Path placeholder untuk foto profil.
// GANTI ini dengan path foto profil Anda yang sebenarnya!
// Anda harus menaruh file foto (misalnya fayyadh_photo.jpg) di folder src/assets/
import profileImage from "../assets/aufa2.jpg";

export default function ProfilePage() {
  const userProfile = {
    name: "Aufa Ika Paramesti",
    nim: "21120123140139",
    // Anda bisa tambahkan deskripsi singkat jika diinginkan
    title: "Mahasiswa | Pengembang Resep Nusantara",
  };

  return (
    <div className="p-4 md:p-8 pb-20 md:pb-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center md:text-left">
          Profil Pengembang
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 w-full max-w-lg mx-auto">
          {/* FOTO PROFIL */}
          <div className="flex justify-center mb-6">
            <img
              // Pastikan rasio aspek gambar Anda persegi (1:1) agar tampil baik
              className="w-40 h-40 rounded-full object-cover border-4 border-amber-500 shadow-xl transition-all duration-300 hover:scale-105"
              src={profileImage}
              alt={`Foto profil ${userProfile.name}`}
            />
          </div>

          {/* INFORMASI UTAMA */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
              {userProfile.name}
            </h2>
            <p className="text-xl text-amber-600 font-medium mb-1">
              {userProfile.title}
            </p>
            <p className="text-lg text-gray-500 mt-3">
              NIM:{" "}
              <span className="font-semibold text-gray-700">
                {userProfile.nim}
              </span>
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              Konten ini dimuat dalam aplikasi Resep Nusantara Modul 4.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
