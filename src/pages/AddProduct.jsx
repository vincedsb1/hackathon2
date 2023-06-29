import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";

import {
    useAuthContext,
    useCartContext,
    useProductsContext,
    useWishlistContext,
} from "../contexts";
import { getProductByIdService } from "../api/apiServices";
import { StarRating } from "../components";
import { notify } from "../utils/utils";

const AddProduct = () => {

        const [formData, setFormData] = useState({
            brand: "",
            model: "",
            description: "",
            screen_size: "",
            antutu_index: "",
            accessories: [],
            network: ["3G", "4G"],
            part_number: "",
            val_a: "",
            val_m: "",
            val_s: "",
            val_total: "",
            memory: "8 Go",
            storage: "64 Go",
            os: "",
            state: "Moyen",
            weighting: "0%",
            condition: "RECONDITIONABLE",
          });
        
        useEffect(() => {
            const total = (Number(formData.val_a) || 0) + (Number(formData.val_m) || 0) + (Number(formData.val_s) || 0);
            setFormData({ ...formData, val_total: total });
        }, [formData.val_a, formData.val_m, formData.val_s]);

        useEffect(() => {
            if (formData.brand === "1") { 
              setFormData({ ...formData, os: "iOS" });
            } else {
              setFormData({ ...formData, os: "Android" });
            }
          }, [formData.brand]);
        
        const handleInputChange = (event) => {
            const target = event.target;
            let value = target.type === 'checkbox' ? target.checked : target.type === 'file' ? target.files[0] : target.value;
            const name = target.name;
          
            if (target.type === 'checkbox') {
                if (Array.isArray(formData[name])) {
                    value = [...formData[name], target.value];
                } else {
                    value = target.checked;
                }
            }
          
            setFormData({ ...formData, [name]: value });
          }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Ici, ajouter la fonction d'ajout via API
      }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen overflow-y-auto">
            <div className="w-full max-w-3xl">
                <p className="text-3xl font-medium p-6">Ajouter un nouveau smartphone</p>
            </div>
        <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-row ">
            <div className="mb-4 pr-4 w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Marque</label>
                <select onChange={handleInputChange} name="brand" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option value="">Sélectionner la marque</option>
                  <option value="1">Apple</option>
                  <option value="2">Samsung</option>
                  <option value="4">Huawei</option>
                  <option value="6">Google</option>
                  <option value="8">OnePlus</option>
                  <option value="10">Xiaomi</option>
                  <option value="12">Oppo</option>
                  <option value="16">LG</option>
                </select>
            </div>
            <div className="mb-4 w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2">Modèle</label>
              <input onChange={handleInputChange} name="model" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
        </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <textarea onChange={handleInputChange} name="description" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
          </div>
          <div className="flex flex-row">
              <div className="mb-4 pr-4 w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Taille d'écran</label>
                <input onChange={handleInputChange} name="screen_size" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
              </div>
              <div className="mb-4 w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Numéro de série</label>
                <input onChange={handleInputChange} name="part_number" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
        </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Index Antutu</label>
            <input onChange={handleInputChange} name="antutu_index" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="flex flex-row">
              <div className="mb-4 pr-4 w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2">Valeur A</label>
                <input onChange={handleInputChange} name="val_a" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4 pr-4 w-1/3">
                 <label className="block text-gray-700 text-sm font-bold mb-2">Valeur M</label>
                <input onChange={handleInputChange} name="val_m" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4 w-1/3">
                <label className="block text-gray-700 text-sm font-bold mb-2">Valeur S</label>
                <input onChange={handleInputChange} name="val_s" type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Valeur Totale</label>
            <input onChange={handleInputChange} name="val_total" type="number" value={formData.val_total} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly />
        </div>
        <div className="flex flex-row">
            <div className="mb-4 flex flex-col pr-4 w-1/2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Réseau</label>
                <label>
                    <input 
                        onChange={handleInputChange} 
                        value="3G" 
                        name="network" 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={formData.network.includes("3G")} 
                    /> 3G
                </label>
                <label>
                    <input 
                        onChange={handleInputChange} 
                        value="4G" 
                        name="network" 
                        type="checkbox" 
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={formData.network.includes("4G")} 
                    /> 4G
                </label>
                <label>
                <input 
                    onChange={handleInputChange} 
                    value="5G" 
                    name="network" 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={formData.network.includes("5G")} 
                /> 5G
                </label>
            </div>
                  <div className="mb-4 w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2">Accessoires inclus</label>
            <input onChange={handleInputChange} name="has_accessories" type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
    </div>
    <div className="flex flex-row">
        <div className="mb-4 pr-4 w-1/3">
            <label className="block text-gray-700 text-sm font-bold mb-2">Système</label>
            <select onChange={handleInputChange} name="os" value={formData.os} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Sélectionnez le système</option>
                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
            </select>
        </div>
        <div className="mb-4 pr-4 w-1/3">
        <label className="block text-gray-700 text-sm font-bold mb-2">Mémoire</label>
        <select onChange={handleInputChange} name="memory" value={formData.memory} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="1 Go">1 Go</option>
            <option value="2 Go">2 Go</option>
            <option value="4 Go">4 Go</option>
            <option value="6 Go">6 Go</option>
            <option value="8 Go">8 Go</option>
            <option value="10 Go">10 Go</option>
            <option value="12 Go">12 Go</option>
            <option value="16 Go">16 Go</option>
        </select>
        </div>
        <div className="mb-4 w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Capacité de stockage</label>
          <select onChange={handleInputChange} name="storage" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="16">16 Go</option>
            <option value="32">32 Go</option>
            <option value="64">64 Go</option>
            <option value="128">128 Go</option>
            <option value="256">256 Go</option>
            <option value="512">512 Go</option>
            <option value="1024">1024 Go</option>
            <option value="2048">2048 Go</option>
          </select>
        </div>
    </div>
    <div className="flex flex-row">
        <div className="mb-4 pr-4 w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">État</label>
          <select onChange={handleInputChange} name="state" value={formData.state} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="Mauvais">Mauvais</option>
            <option value="Moyen">Moyen</option>
            <option value="Bon">Bon</option>
            <option value="Excellent">Excellent</option>
            <option value="Comme neuf">Comme neuf</option>
          </select>
        </div>
        <div className="mb-4 pr-4 w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Pondération</label>
          <select onChange={handleInputChange} name="weighting" value={formData.weighting} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="-100%">-100%</option>
            <option value="-50%">-50%</option>
            <option value="-10%">-10%</option>
            <option value="-5%">-5%</option>
            <option value="0%">0%</option>
            <option value="5%">5%</option>
            <option value="10%">10%</option>
          </select>
        </div>
        <div className="mb-4 w-1/3">
          <label className="block text-gray-700 text-sm font-bold mb-2">Status</label>
          <select onChange={handleInputChange} name="condition" value={formData.condition} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="DEEE">DEEE</option>
            <option value="REPARABLE">REPARABLE</option>
            <option value="BLOQUE">BLOQUE</option>
            <option value="RECONDITIONABLE">RECONDITIONABLE</option>
            <option value="RECONDITIONNÉ">RECONDITIONNÉ</option>
          </select>
        </div>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Photo</label>
            <input 
            onChange={handleInputChange} 
                name="photo" 
                type="file" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                required 
            />
        </div>
          <div className="flex items-center justify-between pt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    );
};

export default AddProduct;
