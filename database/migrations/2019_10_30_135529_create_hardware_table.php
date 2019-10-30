<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHardwareTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hardware', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('computer_id')->unsigned();

            $table->string('model');
            $table->string('brand');
            $table->string('serial');
            $table->string('ram');
            $table->string('processor');
            $table->string('hdd'); // Hard Drive Disk

            $table->timestamps();

            $table->foreign('computer_id')->references('id')->on('computers')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hardware');
    }
}
