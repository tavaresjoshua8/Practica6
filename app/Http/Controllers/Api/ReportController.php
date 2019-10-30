<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Computer;
use App\Report;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reports = Report::get()->map(function($report){
            $report->computer;
            return $report;
        });

        return $reports;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $report = new Report($request->report);
        if( $report->save() ){
            $report->computer;
            return $report;
        }

        $report->computer;

        return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $reports = Computer::find($id)->reports;

        return $reports;
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
        $report = Report::find($id);
        $report->fill($request->report);

        if( $report->save() ){
            $report->computer;
            return $report;
        }

        return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $report = Report::find($id);

        if( $report->delete() ){
            $report->computer;
            return $report;
        }

        return response()->json(['message' => 'Error Inesperado en el Servidor.'], 400);
    }
}
