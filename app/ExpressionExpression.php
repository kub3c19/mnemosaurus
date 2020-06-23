<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExpressionExpression extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'expression_1_id', 'expression_2_id',
    ];

    protected $table = 'expression_expression';

    /**
     * Get the mnemonics for the expressions pair.
     */
    public function mnemonics()
    {
        return $this->hasMany('App\Mnemonic');
    }

    /**
     * Get the first expression associated with the expression pair.
     */
    public function expression1()
    {
        return $this->belongsTo('App\Expression', 'expression_1_id');
    }

    /**
     * Get the second expression associated with the expression pair.
     */
    public function expression2()
    {
        return $this->belongsTo('App\Expression', 'expression_2_id');
    }
}
