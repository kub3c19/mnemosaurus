<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MnemonicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Get all resources matching search query and language.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAllMatchingQueryAndLanguage(Request $request)
    {
        if (!empty($request['q'])) {
            return DB::table('mnemonics')
                ->join('expression_expression', 'mnemonics.expression_expression_id', '=', 'expression_expression.id')
                ->join('expressions as expression_1', 'expression_expression.expression_1_id', '=', 'expression_1.id')
                ->join('expressions as expression_2', 'expression_expression.expression_2_id', '=', 'expression_2.id')
                ->join('languages as language_1', 'expression_1.language_id', '=', 'language_1.id')
                ->join('languages as language_2', 'expression_2.language_id', '=', 'language_2.id')
                ->where('expression_1.text', 'like', '%' . $request['q'] . '%')
                ->orWhere('expression_2.text', 'like', '%' . $request['q'] . '%')
                ->get([
                    'expression_1.text as expression1',
                    'language_1.code as language_1',
                    'expression_2.text as expression_2',
                    'language_2.code as language_2',
                    'mnemonics.text'
                ]);
        } else {
            return [];
        }
    }
}
