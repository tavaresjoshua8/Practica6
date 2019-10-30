<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Computer;
use App\Hardware;
use App\Location;

class ComputerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $computers = Computer::orderBy('name')->get()
        ->map(function($computer){
            $computer->hardware;
            $computer->location;
            return $computer;
        });

        return $computers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $computer = new Computer($request->computer);
        $computer->save();
        try {
            $hardware = $request->computer['hardware'];
            $computer->hardware()->save(new Hardware($hardware));

            $location = $request->computer['location'];
            $computer->location()->save(new Location($location));
        } catch(\Exception $e){
            $computer->delete();
            return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
        }

        $computer->hardware;
        $computer->location;
        return $computer;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $computer = Computer::find($id);
        try {
            $computer->fill($request->computer)->save();

            $hardware = $request->computer['hardware'];
            $computer->hardware->update($hardware);

            $location = $request->computer['location'];
            $computer->location->update($location);
        } catch(\Exception $e){
            return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
        }

        $computer->hardware;
        $computer->location;
        return $computer;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $computer = Computer::find($id);
        $computer->hardware;
        $computer->location;
        if($computer->delete())
            return $computer;

        return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
    }
}
