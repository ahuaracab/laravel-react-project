<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use app\Models\Producto;

class ProductoController extends Controller
{
    public function index() {
        $listaProductos = DB::table('productos')
            ->join('carrito_infos', 'productos.cod_producto', '=', "carrito_infos.cod_producto")
            ->select('productos.cod_producto', 'productos.descripcion', 'productos.stock', 'carrito_infos.descripcion_larga','carrito_infos.precio', 'carrito_infos.imagen')
            ->get();
        return $listaProductos;
    }
}
