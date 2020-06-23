<?php

namespace App\Http\Controllers;

use App\Expression;
use App\ExpressionExpression;
use App\Mnemonic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MnemonicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if (!empty($request['q'])) {
            return DB::table('mnemonics')
                ->join(
                    'expression_expression',
                    'mnemonics.expression_expression_id',
                    '=',
                    'expression_expression.id'
                )
                ->join(
                    'expressions as expression_1',
                    'expression_expression.expression_1_id',
                    '=',
                    'expression_1.id'
                )
                ->join(
                    'expressions as expression_2',
                    'expression_expression.expression_2_id',
                    '=',
                    'expression_2.id'
                )
                ->join(
                    'languages as language_1',
                    'expression_1.language_id',
                    '=',
                    'language_1.id'
                )
                ->join(
                    'languages as language_2',
                    'expression_2.language_id',
                    '=',
                    'language_2.id'
                )
                ->where(
                    'expression_1.text',
                    'like',
                    '%' . $request['q'] . '%'
                )
                ->orWhere(
                    'expression_2.text',
                    'like',
                    '%' . $request['q'] . '%'
                )
                ->get([
                    'expression_1.text as expression1',
                    'language_1.code as language1',
                    'expression_2.text as expression2',
                    'language_2.code as language2',
                    'mnemonics.text'
                ]);
        } else {
            return [];
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('mnemonics-create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $expression_1 = Expression::create([
            'text' => $request->expression1,
            'language_id' =>  $request->language1,
        ]);

        $expression_2 = Expression::create([
            'text' => $request->expression2,
            'language_id' => $request->language2,
        ]);

        $expression_expression = ExpressionExpression::create([
            'expression_1_id' => $expression_1->id,
            'expression_2_id' => $expression_2->id,
        ]);

        Mnemonic::create([
            'text' => $request->text,
            'expression_expression_id' => $expression_expression->id
        ]);
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
}
