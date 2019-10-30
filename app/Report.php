<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'computer_id',
        'date', 'description', 'solution'
    ];

    public function computer()
    {
        return $this->belongsTo(Computer::class);
    }
}
