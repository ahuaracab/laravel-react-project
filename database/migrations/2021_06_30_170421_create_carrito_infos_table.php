<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarritoInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carrito_infos', function (Blueprint $table) {
            $table->bigIncrements('cod_carrito');

            $table->string('descripcion_larga');
            $table->integer('precio');
            $table->string('imagen');

            $table->bigInteger('cod_producto')->index();
            $table->foreign('cod_producto')->references('cod_producto')->on('productos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carrito_infos');
    }
}
